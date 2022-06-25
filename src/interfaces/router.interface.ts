import express from "express";
export interface ICustomRouter {
  /**
   * this function confiqures router
   * @params no
   * @return router
   */
  getRouter(): express.IRouter;
}
