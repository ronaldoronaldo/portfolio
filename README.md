# Combo

[![CircleCI](https://circleci.com/gh/arvoreeducacao/combo.svg?style=svg&circle-token=19a567d1fd75844637d96a671de6dd78fa076867)](https://circleci.com/gh/arvoreeducacao/combo)  [![codecov](https://codecov.io/gh/arvoreeducacao/combo/branch/master/graph/badge.svg?token=qH6SWZsraG)](https://codecov.io/gh/arvoreeducacao/combo)

# Architecture

**TODO**: add how this project is structured (back x front), the basic idea of how it will function (microservice, login and user management).

# Development

## Prerequisites

* PostgreSQL 11.4
* Yarn
* Elixir (1.9.1)
* Erlang (22)

## .env Example

In order to facilitate having the env variables set, you can use a `.env` file with the following:

```
### application
export APP_NAME="Arvore Educação"
export APP_HOST=https://combo-homolog.arvoreeducacao.com.br

### database local
export PG_USERNAME=
export PG_PASSWORD=
export PG_HOST=localhost

export DATABASE_URL=ecto://USER:PASS@localhost/combo_dev
export SECRET_KEY_BASE="$(mix phx.gen.secret)"
export USER_JWT_SECRET=123456

### mailer
export MAILER_SERVER=
export MAILER_PORT=
export MAILER_USERNAME=
export MAILER_PASSWORD=

### others
export ARVORE_API_ENDPOINT=http://localhost:5000/graphql
export GUTEN_API_ENDPOINT=https://homologa.gutennews.com.br/gutten-news/guten-news-web/backend/public/api

```

## Backend

To start the server:

* Install dependencies with `mix deps.get`
* Create and migrate your database with `mix ecto.setup`
* Install Node.js dependencies with `cd assets && yarn install --frozen-lockfile`
* Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

To run the tests, you can use `mix test` or `mix coveralls` to show coverage info.

## Frontend

**TODO:** add how to build and run frontend.

## Building and running a release

*More info on [Deploying with Releases](https://hexdocs.pm/phoenix/releases.html) and [mix release](https://hexdocs.pm/mix/Mix.Tasks.Release.html).*

To build a release in production mode (to test if the release is building and working appropriately), first you need to set two environment variables:

```shell
$ export SECRET_KEY_BASE=$(mix phx.gen.secret)
$ export DATABASE_URL=ecto://postgres:postgres@localhost/combo_dev
```

(the above configuration takes into account you are running a Postgres instance locally on port 5432, with databases already set).

Observation: the *ecto* URL above works like this:

```
ecto://postgres:postgres@localhost/combo_dev

postgres:postgres -> user:password
localhost -> host
combo_dev -> database
```

Then compile code, assets, and then the release:

```shell
$ mix deps.get --only prod
$ MIX_ENV=prod mix compile

$ yarn --cwd ./assets deploy
$ mix phx.digest

$ MIX_ENV=prod mix release
```

To start the server:

```shell
$ _build/prod/rel/combo/bin/combo start
```

## CircleCI

CircleCI is used as the CI service for this project.
Thus, the configuration file can be foud in `.circleci/config.yml`

## Docker files

In the `docker` folder you will find a few Docker files.

* `Dockerfile`: this Dockerfile mimics the steps used in the CI environment, where the final image is the application image. Usefull for testing the build pipeline.
* `Dockerfile.production`: this file is used by the CI to generate the final image, i.e., the artifacts will be copied to this alpine based image to generate the final application image.
* `Dockerfile.runtime`: this image is used by the CI as a base image for building dependencies and artifacts. It is based on an Elixir alpine variant image.

The **runtime** image can (and should) be used whenever possible to always check for potential issues when building dependencies.
It does not need to be built everytime, only when there is the need to update basic tooling on it.
Check the `.circleci/config.yml` to get the latest runtime image in use.
