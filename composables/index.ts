export const useBaseUrl = (): any => {
  const config = useRuntimeConfig();
  return config.public.baseURL;
}
export const useAssetsDir = (): any => {
  const config = useRuntimeConfig();
  return config.app.buildAssetsDir;
}