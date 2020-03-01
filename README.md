# ai-connect-four

## What does this thing do?

This is a web-based version of connect four where the user plays against an AI agent that learns from their playstyle and the gaol is the have the agent win after amount of games. The challenge is to win as many games as possible against the agent before it's just too good to beat you.

## Okay, but how?

The agent will be trained and run through the TensorflowJS library as this is a web application. The specifics will be updated as we figure out more about the problem at hand.

## Install

Install the dependencies with yarn.

```bash
$ cd ai-connect-four
$ yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
$ yarn package
```
