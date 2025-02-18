from typing import Union

from fastapi import FastAPI,Request
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
from .globalVar import global_var
env_name = global_var.environment
env_file_path = os.path.join(os.path.dirname(__file__), '..', f'.env.{env_name}')
load_dotenv(dotenv_path=env_file_path)
frontend_origin = os.getenv("FRONTEND_ORIGIN")
app = FastAPI()
if env_name != "production":
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[frontend_origin or ""],  # 允许所有域名访问，或者指定具体的域名
        allow_methods=["*"],  # 允许所有HTTP方法，如 GET, POST 等
        allow_headers=["*"],  # 允许所有头部信息
    )


@app.get("/")
def read_root(req:Request):
    print(req.headers.__dict__,111)
    return "hello world"


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
