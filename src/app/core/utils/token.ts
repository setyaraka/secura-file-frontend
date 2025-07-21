export function isTokenExpired(token: string): boolean {
    try {
      const payloadBase64 = token.split('.')[1];
      const payloadJson = atob(payloadBase64);
      const payload = JSON.parse(payloadJson);
  
      const exp = payload.exp;
      if (!exp) return true;
      const now = Math.floor(Date.now() / 1000);
  
      return exp < now;
    } catch (e) {
      return true;
    }
  }
  