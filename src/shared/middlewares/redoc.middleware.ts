import redoc from 'redoc-express';

export function setupRedDoc(app: any) {
  const redocOptions = {
    title: 'Api Stock-Pettech',

    version: '1.0',

    specUrl: '/api-json',
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  app.use('/docs', redoc(redocOptions));
}
