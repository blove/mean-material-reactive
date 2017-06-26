// express
import { NextFunction, Response, Request, Router } from "express";

// model
import { Hero } from "../models/hero";

/**
 * @class HerosApi
 */
export class HerosApi {

  /**
   * Create the api.
   * @static
   */
  public static create(router: Router) {
    // DELETE
    router.delete("/heros/:id([0-9a-f]{24})", (req: Request, res: Response, next: NextFunction) => {
      new HerosApi().delete(req, res, next);
    });

    // GET
    router.get("/heros", (req: Request, res: Response, next: NextFunction) => {
      res.status(404).send("Not found");
      next(null);
    });
    router.get("/heros/:id([0-9a-f]{24})", (req: Request, res: Response, next: NextFunction) => {
      new HerosApi().get(req, res, next);
    });

    // POST
    router.post("/heros", (req: Request, res: Response, next: NextFunction) => {
      new HerosApi().create(req, res, next);
    });

    // PUT
    router.put("/heros/:id([0-9a-f]{24})", (req: Request, res: Response, next: NextFunction) => {
      new HerosApi().update(req, res, next);
    });
  }

  /**
   * Create a new hero.
   * @param req {Request} The express request object.
   * @param res {Response} The express response object.
   * @param next {NextFunction} The next function to continue.
   */
  public create(req: Request, res: Response, next: NextFunction) {
    // create hero
    let hero = new Hero(req.body);
    hero.save().then(hero => {
      res.json(hero.toObject());
      next();
    }).catch(next);
  }

  /**
   * Delete a hero.
   * @param req {Request} The express request object.
   * @param res {Response} The express response object.
   * @param next {NextFunction} The next function to continue.
   */
  public delete(req: Request, res: Response, next: NextFunction) {
    // verify the id parameter exists
    const PARAM_ID: string = "id";
    if (req.params[PARAM_ID] === undefined) {
      res.sendStatus(404);
      next();
      return;
    }

    // get id
    var id: string = req.params[PARAM_ID];

    // get hero
      Hero.findById(id).then(hero => {

      // verify hero exists
      if (hero === null) {
        res.sendStatus(404);
        next();
        return;
      }

      hero.remove().then(() => {
        res.sendStatus(200);
        next();
      }).catch(next);
    }).catch(next);
  }

  /**
   * Get a hero.
   * @param req {Request} The express request object.
   * @param res {Response} The express response object.
   * @param next {NextFunction} The next function to continue.
   */
  public get(req: Request, res: Response, next: NextFunction) {
    // verify the id parameter exists
    const PARAM_ID: string = "id";
    if (req.params[PARAM_ID] === undefined) {
      res.sendStatus(404);
      next();
      return;
    }

    // get id
    var id: string = req.params[PARAM_ID];

    // get hero
      Hero.findById(id).then(hero => {

      // verify hero was found
      if (hero === null) {
        res.sendStatus(404);
        next();
        return;
      }

      // send json of hero object
      res.json(hero.toObject());
      next();
    }).catch(next);
  }

  /**
   * Update a hero.
   * @param req {Request} The express request object.
   * @param res {Response} The express response object.
   * @param next {NextFunction} The next function to continue.
   */
  public update(req: Request, res: Response, next: NextFunction) {
    const PARAM_ID: string = "id";

    // verify the id parameter exists
    if (req.params[PARAM_ID] === undefined) {
      res.sendStatus(404);
      next();
      return;
    }

    // get id
    var id: string = req.params[PARAM_ID];

    // get hero
    Hero.findById(id).then(hero => {

      // verify hero was found
      if (hero === null) {
        res.sendStatus(404);
        next();
        return;
      }

      // save hero
      hero = { ...hero, ...req.body };
      hero.save().then(hero => {
        res.json(hero.toObject());
        next();
      }).catch(next);
    }).catch(next);
  }

}
