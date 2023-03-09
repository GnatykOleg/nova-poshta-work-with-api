import axios from "axios";

const { REACT_APP_NP_API_KEY, REACT_APP_NP_BASE_URL = "" } = process.env;

export const trackingStatusServiceApi = async (billOfLading: string) => {
  const response = await axios.post(REACT_APP_NP_BASE_URL, {
    apiKey: REACT_APP_NP_API_KEY,
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber: billOfLading,
        },
      ],
    },
  });

  return response;
};
