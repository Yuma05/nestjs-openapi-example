generate-openapi-interface:
	yarn swagger-typescript-api -p schema/petstore.yaml -o src/api -n api-interface.ts --no-client --route-types
