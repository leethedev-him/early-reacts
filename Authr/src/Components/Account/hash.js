import crypto from "crypto";

const hash = (t) => crypto.createHash('sha256').update(t).digest('hex');

export default hash;