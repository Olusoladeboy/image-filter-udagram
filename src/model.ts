import { Request, Response } from "express";

export interface IRequest extends Request {

}

export interface IResponse extends Response {

}

export interface IQuery {
  image_url: string;
}

export interface IError {
  message: string;
}