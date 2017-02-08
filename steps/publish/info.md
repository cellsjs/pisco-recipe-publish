### Description

Publish a npm module into a registry

### Parameters

- **--registryUrl**: [String], default: 'undefined' : Url of the npm registry. by default use what is configured on .npmrc

  Note: you can change the repository that artifacts is going to be published by adding a .piscosour/piscosour.json file like this:

  ```
  {
    "params" : {
      "registryUrl" : "https://registry.npmjs.org/"
    }
  }
  ```

