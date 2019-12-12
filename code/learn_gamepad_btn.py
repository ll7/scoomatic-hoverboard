"""Simple example showing how to get gamepad events."""

from __future__ import print_function


from inputs import get_gamepad


def main():
    """Just print out some event infomation when the gamepad is used."""
    while 1:

        events = get_gamepad()
        for event in events:
            if event.ev_type != "Sync" or ((event.code == "ABS_X" or event.code == "ABS_Y") and event.state < 130 and event.code > 110):
                print(event.ev_type, event.code, event.state)


if __name__ == "__main__":
    main()
