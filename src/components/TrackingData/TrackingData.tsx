import React from "react";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/reduxHooks";
import { trackingDataSelector } from "../../redux/selectors";
import * as Styled from "./TrackingData.styled";

const TrackingData: React.FC = () => {
  const trackingData = useAppSelector(trackingDataSelector);
  return (
    <Styled.MyCard>
      <Styled.MyCardContent>
        <Typography variant="h5" component={"p"}>
          Iнфо
        </Typography>
        <Typography variant="h6" component={"p"}>
          <strong>Статус доставки:</strong> {trackingData[0]?.Status}
        </Typography>
        <Typography variant="h6" component={"p"}>
          <strong> Відправлено:</strong> {trackingData[0]?.WarehouseSender}
        </Typography>
        <Typography variant="h6" component={"p"}>
          <strong> Отримано:</strong> {trackingData[0]?.WarehouseRecipient}
        </Typography>
      </Styled.MyCardContent>
    </Styled.MyCard>
  );
};

export default TrackingData;
