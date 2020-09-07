// #region Global Imports
import next from 'next';
import express, { Request, Response } from 'express';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = parseInt(process.env.PORT || '3000', 10);
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(
        `> Ready on http://localhost:${port} - env ${process.env.NODE_ENV} \n you current API ENDPOINT - ${process.env.NEXT_PUBLIC_API_URL}`
      );
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
