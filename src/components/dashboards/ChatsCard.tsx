import { FC } from "react";

type Props = {
  title: string;
  content: number;
};

const ChatsCard: FC<Props> =({title, content}) => {
    return (
      <div className="col-content col-content-full border-card">
          <span className='title-card'>{title}</span>
          <span className='number-card'> {content}</span>
      </div>
    )
  }

export default ChatsCard;
