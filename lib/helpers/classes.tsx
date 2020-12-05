function classes(...names: (string | undefined)[]) {
  return names.filter(e => Boolean(e)).join(' ');
}

export default classes;
