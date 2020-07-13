const REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;

export const isUrl = (uri: string): boolean => {
  const res = uri.match(REGEX);
  return res !== null;
};

export default isUrl;
