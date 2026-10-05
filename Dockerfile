FROM ghcr.io/mlflow/mlflow:v3.13.0

# Install dependencies for native basic authentication and S3 communication
RUN pip install --no-cache-dir 'mlflow[auth]' boto3 psycopg2-binary
