export const useBaseUrl = (): any => {
  const config = useRuntimeConfig();
  return config.public.baseURL;
}