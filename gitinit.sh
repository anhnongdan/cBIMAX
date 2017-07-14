#!/bin/bash
git submodule update --init --recursive
git submodule update --recursive --remote

cd src && git submodule update --init --recursive
cd src && git submodule update --recursive --remote

