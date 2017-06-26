process.env.NODE_ENV = "test";

// mocha
import "mocha";
import { suite, test } from "mocha-typescript";

// mongodb
import { ObjectID } from "mongodb";

// server
import { Server } from "../server";

// model
import { Hero } from "../interfaces/hero";
import { HeroModel, HeroModelStatic } from "../models/hero";
import { heroSchema } from "../schemas/hero";

// mongoose
import mongoose = require("mongoose");

//require http server
var http = require("http");

//require chai and use should assertions
let chai = require("chai");
chai.should();

//configure chai-http
chai.use(require("chai-http"));

@suite class HerosTest {

}