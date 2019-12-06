import React, { useState, ueEffect } from "react";

const MovieContext = React.createContext();

const api = `http://www.omdbapi.com/?s=iron&apikey=8dae9e85`