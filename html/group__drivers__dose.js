var group__drivers__dose =
[
    [ "Differentially Operated Serial Ethernet (DOSE) driver compile configuration", "group__drivers__dose__config.html", "group__drivers__dose__config" ],
    [ "dose_params.h", "dose__params_8h.html", null ],
    [ "dose.h", "dose_8h.html", null ],
    [ "dose_t", "structdose__t.html", [
      [ "flags", "structdose__t.html#ab10f0d7b960e53869ad5d61b4b24e39f", null ],
      [ "mac_addr", "structdose__t.html#af1583471a46f75d691d8a1d808f4ba53", null ],
      [ "netdev", "structdose__t.html#a1129963d252b60be5850cb89d9b4e35c", null ],
      [ "opts", "structdose__t.html#ad20e0011f1f04b91f167d19d87f93826", null ],
      [ "recv_buf", "structdose__t.html#a8f4f3695ebcff1143e1bb2469e961612", null ],
      [ "recv_buf_ptr", "structdose__t.html#a1ff3374abd5cfe71df1087a9032dcf30", null ],
      [ "sense_pin", "structdose__t.html#aae6d0f440a3cad274dcd3a3723021d47", null ],
      [ "state", "structdose__t.html#a9127ced0c1272c6d36de0f727b5a7cb8", null ],
      [ "state_mtx", "structdose__t.html#a37e193220feff4cac7706c6c63c3556b", null ],
      [ "timeout", "structdose__t.html#a2218c31e0189d476469f4fe80f00de5a", null ],
      [ "timeout_base", "structdose__t.html#a2e860ed0b59e4427b64514bc95ddeeb3", null ],
      [ "uart", "structdose__t.html#ae548dbb7f9ff21e3a46de9de56708140", null ],
      [ "uart_octet", "structdose__t.html#a2b33c272c2338b27cfa5953af9159690", null ]
    ] ],
    [ "dose_params_t", "structdose__params__t.html", [
      [ "baudrate", "structdose__params__t.html#a1779edcc3c0a9031458a6a1b0631d68c", null ],
      [ "sense_pin", "structdose__params__t.html#ae4d0b4d04016b01e7b21b00344895ee0", null ],
      [ "uart", "structdose__params__t.html#a6ec4157365c38f5a56b00b04ebfee301", null ]
    ] ],
    [ "DOSE_FLAG_END_RECEIVED", "group__drivers__dose.html#gacd1ea8be8c8baffc5496dd57df377fd1", null ],
    [ "DOSE_FLAG_ESC_RECEIVED", "group__drivers__dose.html#ga01ccd21bf5e067b0b9a2730a6a338ed2", null ],
    [ "DOSE_FLAG_RECV_BUF_DIRTY", "group__drivers__dose.html#ga659fe1fd4199b5dc66fd098199c90643", null ],
    [ "DOSE_FRAME_CRC_LEN", "group__drivers__dose.html#ga3cbae2da894b8b899e2423dd8a1b2708", null ],
    [ "DOSE_FRAME_LEN", "group__drivers__dose.html#gaf60c4bcf9b6845225d87071e17f1c5f1", null ],
    [ "DOSE_OCTET_END", "group__drivers__dose.html#ga40123b1e15dcfa799b379a23ee1fc3fc", null ],
    [ "DOSE_OCTET_ESC", "group__drivers__dose.html#gaefbe24effe61e61fdb9826924c861f6a", null ],
    [ "DOSE_OPT_PROMISCUOUS", "group__drivers__dose.html#ga7e0a2336fef58651c80d566938cd293e", null ],
    [ "dose_signal_t", "group__drivers__dose.html#gab66024cfbb81859098a7cdd929b89783", [
      [ "DOSE_SIGNAL_NONE", "group__drivers__dose.html#ggab66024cfbb81859098a7cdd929b89783a90d346eb5337a5c4c40b4f0a436bccff", null ],
      [ "DOSE_SIGNAL_INIT", "group__drivers__dose.html#ggab66024cfbb81859098a7cdd929b89783a2cc2561ea994988108be2df6f6bb38a7", null ],
      [ "DOSE_SIGNAL_GPIO", "group__drivers__dose.html#ggab66024cfbb81859098a7cdd929b89783a28ed8b599df04f8889f12bffc09e900e", null ],
      [ "DOSE_SIGNAL_UART", "group__drivers__dose.html#ggab66024cfbb81859098a7cdd929b89783a5c0f266766609461d487b5779fbe81e3", null ],
      [ "DOSE_SIGNAL_XTIMER", "group__drivers__dose.html#ggab66024cfbb81859098a7cdd929b89783a314305a3eb9f10aa46a2f0fba39d3dd0", null ],
      [ "DOSE_SIGNAL_SEND", "group__drivers__dose.html#ggab66024cfbb81859098a7cdd929b89783aee8fdf1bcc541c7b226996de195e3f1c", null ],
      [ "DOSE_SIGNAL_END", "group__drivers__dose.html#ggab66024cfbb81859098a7cdd929b89783ad98b7a2e3cd9ae1b42e08cc7d8676cc3", null ]
    ] ],
    [ "dose_state_t", "group__drivers__dose.html#gadce3cc3a69672e85d98942f947ee2794", [
      [ "DOSE_STATE_INIT", "group__drivers__dose.html#ggadce3cc3a69672e85d98942f947ee2794adaf962533eb1f07778cfab6855afe437", null ],
      [ "DOSE_STATE_BLOCKED", "group__drivers__dose.html#ggadce3cc3a69672e85d98942f947ee2794a3a784574c609f1bf4c1bcd0167279387", null ],
      [ "DOSE_STATE_IDLE", "group__drivers__dose.html#ggadce3cc3a69672e85d98942f947ee2794a81e8e5c25a4d1de48a29d49a82ebcc02", null ],
      [ "DOSE_STATE_RECV", "group__drivers__dose.html#ggadce3cc3a69672e85d98942f947ee2794afc9c59c7184f57b81edbd5b1056955fb", null ],
      [ "DOSE_STATE_SEND", "group__drivers__dose.html#ggadce3cc3a69672e85d98942f947ee2794a898fa3d862f8e75d750cc8a940b5fe12", null ],
      [ "DOSE_STATE_ANY", "group__drivers__dose.html#ggadce3cc3a69672e85d98942f947ee2794ac3232f031952e266d6d6935165eab404", null ]
    ] ],
    [ "dose_setup", "group__drivers__dose.html#gacb1b2c66e5d957612fd95616346da66b", null ]
];