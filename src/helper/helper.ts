export const getHashParams = (): Record<string, string> => {
    const hashParams: Record<string, string> = {};
    const regex = /([^&;=]+)=?([^&;]*)/g;
    const query = window.location.hash.substring(1);
  
    let match: RegExpExecArray | null;
    while ((match = regex.exec(query)) !== null) {
      const [, key, value] = match;
      hashParams[key] = decodeURIComponent(value);
    }
  
    return hashParams;
};

export const setTokenInLocalStorage = (token: string) => {
    localStorage.setItem('spotify_token', token);
};

export const getNowDate = () => {
  const today = new Date();
  const options = {
    weekday: 'long' as const,
    day: 'numeric' as const,
    month: 'long' as const,
    year: 'numeric' as const,
  };

  const date = today.toLocaleDateString('en-US', options);
  
  return date;
};