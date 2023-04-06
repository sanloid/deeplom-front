import { useEffect, useState } from "react";

interface ISSEWrapper {
  url: string;
  onMessage: (event: MessageEvent) => void;
}

const SSEWrapper: React.FC<ISSEWrapper> = ({ url, onMessage }) => {
  useEffect(() => {
    const source = new EventSource(`http://localhost:3000/${url}`);
    source.onerror = (e) => {
      console.log(JSON.stringify(e));
      source.close();
    };
    source.onmessage = (e) => {
      console.log(e);
    };
    return () => {
      source.close();
    };
  }, [url, onMessage]);
  return <></>;
};
export default SSEWrapper;
