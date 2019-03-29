/*
 * Copyright (c) 2006 Jonathan Weiss <jw@innerewut.de>
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


/* tooltip-0.2.js - Small tooltip library on top of Prototype 
 * by Jonathan Weiss <jw@innerewut.de> distributed under the BSD license. 
 *
 * This tooltip library works in two modes. If it gets a valid DOM element 
 * or DOM id as an argument it uses this element as the tooltip. This 
 * element will be placed (and shown) near the mouse pointer when a trigger-
 * element is moused-over.
 * If it gets only a text as an argument instead of a DOM id or DOM element
 * it will create a div with the classname 'tooltip' that holds the given text.
 * This newly created div will be used as the tooltip. This is usefull if you 
 * want to use tooltip.js to create popups out of title attributes.
 * 
 *
 * Usage: 
 *   <script src="/javascripts/prototype.js" type="text/javascript"></script>
 *   <script src="/javascripts/tooltip.js" type="text/javascript"></script>
 *   <script type="text/javascript">
 *     // with valid DOM id
 *     var my_tooltip = new Tooltip('id_of_trigger_element', 'id_of_tooltip_to_show_element')
 *
 *     // with text
 *     var my_other_tooltip = new Tooltip('id_of_trigger_element', 'a nice description')
 *
 *     // create popups for each element with a title attribute
 *    Event.observe(window,"load",function() {
 *      $$("*").findAll(function(node){
 *        return node.getAttribute('title');
 *      }).each(function(node){
 *        new Tooltip(node,node.title);
 *        node.removeAttribute("title");
 *      });
 *    });
 *    
 *   </script>
 * 
 * Now whenever you trigger a mouseOver on the `trigger` element, the tooltip element will
 * be shown. On o mouseOut the tooltip disappears. 
 * 
 * Example:
 * 
 *   <script src="/javascripts/prototype.js" type="text/javascript"></script>
 *   <script src="/javascripts/scriptaculous.js" type="text/javascript"></script>
 *   <script src="/javascripts/tooltip.js" type="text/javascript"></script>
 *
 *   <div id='tooltip' style="display:none; margin: 5px; background-color: red;">
 *     Detail infos on product 1....<br />
 *   </div>
 *
 *   <div id='product_1'>
 *     This is product 1
 *   </div>
 *
 *   <script type="text/javascript">
 *     var my_tooltip = new Tooltip('product_1', 'tooltip')
 *   </script>
 *
 * You can use my_tooltip.destroy() to remove the event observers and thereby the tooltip.
 */

var Tooltip = Class.create();
Tooltip.prototype = {
  initialize: function(element, tool_tip) {
    var options = Object.extend({
      default_css: false,
      margin: "0px",
	    padding: "5px",
	    backgroundColor: "#d6d6fc",
	    min_distance_x: 5,
      min_distance_y: 5,
      delta_x: 0,
      delta_y: 0,
      zindex: 1000
    }, arguments[2] || {});

    this.element      = $P(element);

    this.options      = options;
    
    // use the supplied tooltip element or create our own div
    if($P(tool_tip)) {
      this.tool_tip = $P(tool_tip);
    } else {
      this.tool_tip = $P(document.createElement("div")); 
      document.body.appendChild(this.tool_tip);
      this.tool_tip.addClassName("tooltip");
      this.tool_tip.appendChild(document.createTextNode(tool_tip));
    }
    
    this.original_tool_tip=Element.clone(this.tool_tip,true);
    // hide the tool-tip by default
    this.tool_tip.hide();

    this.eventMouseOver = this.showTooltip.bindAsEventListener(this);
    this.eventMouseOut   = this.hideTooltip.bindAsEventListener(this);
    this.eventMouseMove  = this.moveTooltip.bindAsEventListener(this);

    this.registerEvents();   
  },

  destroy: function() {
    Event.stopObserving(this.element, "mouseover", this.eventMouseOver);
    Event.stopObserving(this.element, "mouseout", this.eventMouseOut);
    Event.stopObserving(this.element, "mousemove", this.eventMouseMove);
  },

  registerEvents: function() {
    Event.observe(this.element, "mouseover", this.eventMouseOver);
    Event.observe(this.element, "mouseout", this.eventMouseOut);
    Event.observe(this.element, "mousemove", this.eventMouseMove);
  },

  moveTooltip: function(event){
	  Event.stop(event);

	  // fix ie bug
	  if (this.isIe6()) {
		  this.fixIEOverlapping(this.tool_tip);
	  }

	  // restore the original tooltip
	  this.tool_tip.update(this.original_tool_tip.innerHTML);

	  var height = this.getWindowHeight() - this.options.min_distance_y;
	  var fit=false;
	  var i=0;

	  // get Mouse position (absolute positions)
	  var mouse_x = Event.pointerX(event);
	  var mouse_y = Event.pointerY(event);

	  var element_width;
	  var element_height;

	  //offsets need to be subtracted from mouse position so that the element fits
	  //into the window and not just into the page
	  var scrollOffsets = document.viewport.getScrollOffsets();

	  var iterations=2;// up to 4 columns
	  while(fit===false&&i<iterations){
		  i++;

		  // decide if wee need to switch sides for the tooltip
		  var dimensions = Element.getDimensions(this.tool_tip );
		  element_width = dimensions.width;
		  element_height = dimensions.height;

		  if ( (element_height + mouse_y - scrollOffsets.top) >= height ){ // too big for Y
			  if(element_height<=mouse_y - scrollOffsets.top){	// fits between 0 and row?
			    mouse_y = mouse_y  - element_height;
			    fit=true;
			  }else{
				  if(mouse_y -element_height/2>=scrollOffsets.top && mouse_y - scrollOffsets.top + element_height/2 <=height){// halfs fit?
				    mouse_y=mouse_y-element_height/2;
				    fit=true;
				  }else if(this.tool_tip.select('table')!==null&&i<iterations){ // now we have to split the text into columns
					  var cellCount=this.original_tool_tip.select('td').size();
					  var columnCount=i*2+2;
					  var rowCount=0;
					  var row;
					  var column;

					  while(columnCount*rowCount<cellCount){//the cells need to fit in the new table
						  rowCount++;
					  }

					  var newTable=Element.clone(this.tool_tip.down('table'));
					  var rowElement=this.tool_tip.select('tr').first();
					  for(row=0; row<rowCount; row++){
						  var newRowElement=Element.clone(rowElement);						  
                          for(column=0;column<columnCount;column++){
							  var cell;
							  var cellIndex=row*columnCount+column;
							  var columnElement;

							  if(cellIndex<cellCount){
								  columnElement=Element.clone(this.tool_tip.select('td')[row*columnCount+column]);
								  cell=this.original_tool_tip.select('td')[row*columnCount+column].innerHTML;								  
							  }else{
								  cell=''; //fill with empty cell
								  columnElement=new Element('td');
							  }

							  columnElement.update(cell);							  
                              newRowElement.insert({'bottom':columnElement});
						  }
                          newTable.insert({'bottom':this.outerHTML(newRowElement)});
					  }
					  this.tool_tip.update(newTable);
				  }else{
					  fit=true;// tooltip without table can not be resized
				  }
			  }
		  }else{			  
			  fit=true; // element fits between mouse_y and bottom of window
		  }
		  if(fit===true){
              // apply min_distance to make sure that the mouse is not on the tool-tip
			  mouse_y = mouse_y + this.options.min_distance_y;
		  }
	  }
	  
	  if ( (element_width + mouse_x - scrollOffsets.left) >= ( this.getWindowWidth() - this.options.min_distance_x) ){ // too big for X
		  mouse_x = mouse_x - element_width;
		  // apply min_distance to make sure that the mouse is not on the tool-tip
		  mouse_x = mouse_x - this.options.min_distance_x;
	  } else {
		  mouse_x = mouse_x + this.options.min_distance_x;
	  }
	  // now set the right styles
	  this.setStyles(mouse_x, mouse_y);
  },
	
		
  showTooltip: function(event) {
    Event.stop(event);    
    this.moveTooltip(event);
	Element.show(this.tool_tip);
  },
  
  setStyles: function(x, y){
    // set the right styles to position the tool tip
	  Element.setStyle(this.tool_tip, { position:'absolute',
                                        top:y + this.options.delta_y + "px",
                                        left:x + this.options.delta_x + "px",
                                        zindex:this.options.zindex
                                      });
	
	  // apply default theme if wanted
	  if (this.options.default_css){
          Element.setStyle(this.tool_tip, { margin:this.options.margin,
                                            padding:this.options.padding,
                                            backgroundColor:this.options.backgroundColor,
                                            zindex:this.options.zindex
                                          });	
	  }	
  },

  hideTooltip: function(event){
	  this.resetIEOverlappingFix(this.tool_tip);
	  Element.hide(this.tool_tip);	  
  },

  getWindowHeight: function()
  {
      var myHeight = 0;
      if (typeof(window.innerHeight) === 'number')
      {
          // Non-IE
          myHeight = window.innerHeight;
      }
      else if (document.documentElement && document.documentElement.clientHeight)
      {
          // IE 6+ in 'standards compliant mode'
          myHeight = document.documentElement.clientHeight;
      }
      else if (document.body && document.body.clientHeight)
      {
          // IE 4 compatible
          myHeight = document.body.clientHeight;
      }
      return myHeight;
  },
 
  getWindowWidth:  function()
  {
      var myWidth = 0;
      if (typeof(window.innerWidth) === 'number')
      {
          // Non-IE
          myWidth = window.innerWidth;
      }
      else if (document.documentElement && document.documentElement.clientWidth)
      {
          // IE 6+ in 'standards compliant mode'
          myWidth = document.documentElement.clientWidth;
      }
      else if (document.body && document.body.clientWidth)
      {
          // IE 4 compatible
          myWidth = document.body.clientWidth;
      }
      return myWidth;
  },
  
  isIe6: function() {
	  return document.all &&
            (navigator.userAgent.toLowerCase().indexOf("msie 6.") !== -1);
  },
  fixIE: function(element, element_iefix) {
	    Position.clone(element, element_iefix, {setTop:(!element.style.height)});
	    element_iefix.style.zIndex = 1;
	    element.style.zIndex = 2;
	    Element.show(element_iefix);
  },

  resetIEOverlappingFix: function(elem) {
	  if ($P(elem.id + '_iefix')) {
		  Element.hide($P(elem.id + '_iefix'));
	  }
  },
  
  fixIEOverlapping: function(element) {
	  if ($P(element.id + '_iefix')) {
		  this.fixIE(element, $P(element.id + '_iefix'));
	  }

	  if((navigator.appVersion.indexOf('MSIE')>0) 
	        && (navigator.userAgent.indexOf('Opera')<0) 
	        && (Element.getStyle(element, 'position') === 'absolute')
	        && !$P(element.id + '_iefix')) {
	        Insertion.After(element.id, 
	        '<iframe id="' + element.id + '_iefix" ' +
	        'style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" ' +
	        'src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
	        
	        var startFix = function() {
               this.fixIE(element, $P(element.id + '_iefix'));
	        };
	        setTimeout(startFix.bind(this), 50);
	    }
	},
  outerHTML: function(node){
	  // if IE, Chrome take the internal method otherwise build one
	  return node.outerHTML || (
	      function(n){
	          var div = document.createElement('div'), h;
	          div.appendChild( n.cloneNode(true) );
	          h = div.innerHTML;
	          div = null;
	          return h;
	      }(node));
	  }
};
