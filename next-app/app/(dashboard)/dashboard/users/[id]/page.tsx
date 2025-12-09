const UserDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  // console.log("server component");
  // return <div> Dashboard User Detail Page</div>;
  const { id } = await params;
  return <div>Showing details for user #{id}</div>;
};
export default UserDetail;
