# MEAN App Unplugged

MEAN + Material + Reactive in TypeScript

## Install

First, run the gulp tasks, then start the Node.js Express server.

<pre><code class="language-bash">$ gulp
$ chmod +x ./dist/bin/www
$ ./dist/bin/www</code></pre>

Then, serve the Angular client using the CLI:

<pre><code class="language-bash">$ ng serve</code></pre>

## Goals

Our goals for this series are:

1. Create a simple CRUD app similar to the Tour of Heros tutorial app for Angular.
2. Create the REST API using Express written in TypeScript with Mongoose for persisting data to MongoDb.
3. Use Angular Material and Angular Flex Layout for the UI.
4. Use Reactive Extensions for JavaScript, specifically, RxJS and ngrx.