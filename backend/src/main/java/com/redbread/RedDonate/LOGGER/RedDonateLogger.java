package com.redbread.RedDonate.LOGGER;

import java.util.logging.Level;
import java.util.logging.Logger;

public class RedDonateLogger {
    private final static Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

    public void error(String msg) {
        LOGGER.log(Level.SEVERE, msg);
    }

    public void info(String msg) {
        LOGGER.log(Level.INFO, msg);
    }

    public void warning(String msg) {
        LOGGER.log(Level.WARNING, msg);
    }
}
