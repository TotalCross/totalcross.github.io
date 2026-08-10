---
title: Traffic control system by Tecdet
description: Why Tecdet migrated its embedded traffic system to Linux Arm and chose TotalCross for its GUI.
subtitle: Why Tecdet decided to migrate its embedded system to Linux Arm and built an innovative way to inspect Brazilian automotive traffic.
publishDate: 2021-02-25T22:12:03.284Z
author: kaique-mancoso
language: en
tags:
  - Linux Arm
  - Embedded systems
  - Case study
categories:
  - Customer stories
draft: false
legacyPath: /traffic-control-system-by-tecdet/
crossPost:
  dev: false
  medium: false
---
<!--
SPDX-FileCopyrightText: Copyright holder(s) of the Tecdet customer material
SPDX-License-Identifier: LicenseRef-ThirdParty-Material
-->

Tecdet develops systems for traffic control and inspection for the Brazilian government. Their engineers wanted to upgrade technology based on Windows x86, which was no longer satisfactory in terms of performance and energy consumption. They rebuilt the system for the Linux Arm architecture on Toradex modules and chose TotalCross to develop their GUI.

## Why did Tecdet choose TotalCross?

### 1. Time to market

The project lead engineer had firmware experience but no previous GUI creation experience. TotalCross was the fastest framework for him to learn and use. With basic Java knowledge, he learned TotalCross in one week and built a five-screen first version in two more weeks. That represented more than a 60% reduction from the estimate for the alternative C/C++ framework.

### 2. Cost

The project used low-end devices and needed to avoid runtime fees. TotalCross met these requirements with a free and open-source license and high performance on constrained hardware.

### 3. Low footprint

The TotalCross runtime was 5MB at the time. The complete application, including the custom Yocto distribution developed by [O.S. Systems](https://www.ossystems.com.br/), was only 23MB.

## Embedded systems for society's demands

Projects like Tecdet's must balance available budget, time-to-market expectations, and long-term maintenance. A framework that is easier and faster to learn can make this work more sustainable.
