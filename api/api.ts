import express from 'express';
import { addLinkDefinitions } from 'openapi-link-generator';
import { parseOpenAPIDocument } from 'openapi-link-generator/dist/openapi-tools';
import { OpenAPIV3 } from 'openapi-types';

const router = express.Router();
router.post('/add-links', async (req, res) => {
  let document: OpenAPIV3.Document;
  if (typeof req.body.input === 'string') {
    document = await parseOpenAPIDocument(req.body.input);
  } else if (typeof req.body.input === 'object') {
    document = req.body.input;
  } else {
    res.status(400).end();
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
