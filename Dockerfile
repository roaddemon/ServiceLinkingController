#build stage
FROM golang:latest as build-env
ADD . /src
WORKDIR /src
RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -o servicelinkingcontroller .


#final stage
FROM alpine:latest
WORKDIR /app
COPY --from=build-env /src/servicelinkingcontroller .
ENTRYPOINT ./servicelinkingcontroller
