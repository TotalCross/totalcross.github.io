/*
 * SPDX-FileCopyrightText: 2026 Amalgam Solucoes em TI Ltda.
 * SPDX-License-Identifier: MIT
 */

import { useEffect } from "react";
import { navigate } from "gatsby";

export default () => {
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
};
