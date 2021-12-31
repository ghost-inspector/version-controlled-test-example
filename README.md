## Version-controlled test example

This project demonstrates a simple website app and executing an on-demand test from a branch. The code changes are visible in [pull request #1](https://github.com/ghost-inspector/version-controlled-test-example/pull/1). The Github Actions configuration to execute the on-demand test [is in the workflow](.github/workflows/test-contact-form.yml).

#### Run the site locally:

You can start up the example site locally with the following:

```shell
git clone https://github.com/ghost-inspector/version-controlled-test-example.git
cd version-controlled-test-example
npm install .
npm run start
```

#### Execute on-demand test

Install the [Ghost Inspector CLI](https://ghostinspector.com/docs/api/cli/) and execute an on-demand test against the local app:

```shell
npm install -g ghost-inspector
ghost-inspector test execute-on-demand $myOrganizationId ./tests/test-contact-form.json \
  --ngrokTunnel localhost:3000 \
  --ngrokUrlVariable startUrl \
  --ngrokToken $myNgrokToken \
  --apiKey $myApiKey
```

### Start Bootstrap theme copyright notice

Grayscale Bootstrap theme copyright 2013-2021 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE) license.
