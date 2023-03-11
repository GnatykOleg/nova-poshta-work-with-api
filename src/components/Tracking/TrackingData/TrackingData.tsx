import React from "react";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { trackingDataSelector } from "../../../redux/selectors/trackingSelectors";
import * as Styled from "./TrackingData.styled";
import { billOfLadingDataSelector } from "../../../redux/selectors/billOfLadingSelectors";

const TrackingData: React.FC = () => {
  const trackingData = useAppSelector(trackingDataSelector);
  const story = useAppSelector(billOfLadingDataSelector);

  const deliveryStatus = story.length > 0 && trackingData[0]?.Status;

  const sender = story.length > 0 && trackingData[0]?.WarehouseSender;

  const recipient = story.length > 0 && trackingData[0]?.WarehouseRecipient;

  return (
    <Styled.MyCard>
      <Styled.MyCardContent>
        <Typography variant="h6" component={"p"}>
          <strong>Статус доставки:</strong> {deliveryStatus}
        </Typography>
        <Typography variant="h6" component={"p"}>
          <strong> Відправлено:</strong> {sender}
        </Typography>
        <Typography variant="h6" component={"p"}>
          <strong> Отримано:</strong> {recipient}
        </Typography>
      </Styled.MyCardContent>
    </Styled.MyCard>
  );
};

export default TrackingData;
