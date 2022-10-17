import {
  SparklineComponent,
  SparklineTooltip,
  Inject,
} from '@syncfusion/ej2-react-charts';
import { SparklineAreaData } from '../../data/dummy';

type SparklineProps = {
  id: string;
  currentColor: string;
  color: string;
  data: typeof SparklineAreaData;
  width: string;
  height: string;
  type: string;
};

const SparkLine: React.FC<SparklineProps> = ({
  id,
  color,
  currentColor,
  data,
  height,
  type,
  width,
}: SparklineProps) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
      dataSource={data}
      xName='x'
      yName='yval'
      type='Line'
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
