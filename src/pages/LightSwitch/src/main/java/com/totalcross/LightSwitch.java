package com.totalcross;

import com.totalcross.util.*;
import totalcross.ui.MainWindow;
import totalcross.ui.Switch;
import totalcross.ui.ImageControl;
import totalcross.io.device.gpiod.GpiodChip;
import totalcross.io.device.gpiod.GpiodLine;
import totalcross.ui.event.ControlEvent;
import totalcross.ui.event.PressListener;
import totalcross.util.UnitsConverter;
import totalcross.sys.Settings;

public class LightSwitch extends MainWindow {

    public LightSwitch() {
        setUIStyle(Settings.MATERIAL_UI);
        setBackColor(Colors.COLOR_DARK_GRAY);
    }

    private Switch swLightSwitch;
    private ImageControl icLight;
    private GpiodChip gpioChip;
    private GpiodLine pin;

    @Override
    public void initUI() {
        Images.loadImages();

        // Create switch components
        swLightSwitch = new Switch();

        // Set the colors of the switch's parts
        swLightSwitch.colorBallOn = Colors.COLOR_DARK_YELLOW;
        swLightSwitch.colorBallOff = Colors.COLOR_LIGHT_GRAY;
        swLightSwitch.colorBarOn = Colors.COLOR_LIGHT_YELLOW;
        swLightSwitch.colorBarOff = Colors.COLOR_MEDIUM_GRAY;

        // Create image control component with initial light off image
        icLight = new ImageControl(Images.iLightOff);
        icLight.scaleToFit = true;

        // Position light bulb at the center of the screen,
        // using the original size of the image
        add(icLight, CENTER, CENTER - UnitsConverter.toPixels(DP + 40), PREFERRED, PREFERRED);

        // Position the switch below the image
        add(swLightSwitch, CENTER, AFTER, UnitsConverter.toPixels(DP + 150), UnitsConverter.toPixels(DP + 30));

        swLightSwitch.addPressListener(onSwitchPressed);

        // Open Gpio chip
        gpioChip = GpiodChip.open(0);

        // Get Gpio line
        pin = gpioChip.line(23);

        // Request line as output and set the initial state to low
        pin.requestOutput("CONSUMER", 0);

    }

    PressListener onSwitchPressed = new PressListener() {
        @Override
        public void controlPressed(ControlEvent controlEvent) {
            if (swLightSwitch.isOn()) {
                icLight.setImage(Images.iLightOn);
                pin.setValue(1);
            } else {
                icLight.setImage(Images.iLightOff);
                pin.setValue(0);
            }
        }
    };

}
