# 使用官方 Python 镜像作为基础镜像
FROM python:3.12-slim AS build

# 设置工作目录
WORKDIR /backend
RUN pip install uv
COPY pyproject.toml pyproject.toml
RUN uv sync --no-dev

COPY . .

# 暴露 FastAPI 运行的端口（默认是 8000）
EXPOSE 8000

# 启动 FastAPI 应用，使用 Uvicorn 作为 ASGI 服务器
# CMD ["uv","run","uvicorn", "src.app:app", "--host", "0.0.0.0", "--port", "8000"]
CMD ["uv","run","run.py","prod"]