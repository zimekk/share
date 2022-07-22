export class SMBSession {
  constructor({ server, user, password }) {}

  connect() {
    return Promise.resolve();
  }

  connectToSharedFolder(share: string) {
    return Promise.resolve({
      listFiles: (dir: string) => Promise.resolve([`${dir}//${share}`]),
    });
  }
}
