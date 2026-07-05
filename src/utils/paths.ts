function basePath(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? base : `${base}/`;
}

export function withBase(path: string): string {
  if (/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(path)) {
    return path;
  }

  const normalizedPath = path.replace(/^\//, '');

  return `${basePath()}${normalizedPath}`.replace(/\/+/g, '/');
}

export function withoutBase(path: string): string {
  const base = basePath();

  if (base !== '/' && path.startsWith(base)) {
    return `/${path.slice(base.length)}`.replace(/\/+/g, '/');
  }

  return path;
}
