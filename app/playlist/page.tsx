export default function playlistpage(props: any) {
  console.log(props);
  return <div>playlist page : {props.searchParams.list}</div>;
}
