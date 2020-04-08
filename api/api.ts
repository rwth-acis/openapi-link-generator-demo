import express from 'express';
import { addLinkDefinitions } from 'openapi-link-generator';
import { parseOpenAPIDocument } from 'openapi-link-generator/dist/openapi-tools';
import { OpenAPIV3 } from 'openapi-types';

const router = express.Router();
router.post('/add-links', async (req, res) => {
  let document: OpenAPIV3.Document;

  if (typeof req.body.input === 'string') {
    try {
      document = await parseOpenAPIDocument(req.body.input);
    } catch (ex) {
      res
        .status(400)
        .send({ message: `Unable to parse OpenAPI Document: ${ex.message}` })
        .end();
      return;
    }
  } else {
    res.status(400).send({ message: 'Expected "input" to be a string' }).end();
    return;
  }

  const result = addLinkDefinitions(document);
  res
    .status(200)
    .json({
      numLinks: result.numLinks,
      result: result.openapi,
    })
    .end();
});

export default router;
