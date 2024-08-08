export default function channelpage(props: any) {
  console.log(props);

  return <div>채널 id: {props.params.id}</div>;
}
