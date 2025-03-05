echo "building container..."
docker build . -t thflask
echo "container built"
mkdir -p volumes/data-mysql
echo "running server"
docker compose up -d
docker ps
echo "server running"


