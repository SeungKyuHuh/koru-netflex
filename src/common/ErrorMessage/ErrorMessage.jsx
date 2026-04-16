export const ErrorMessage = ({ error }) => {
  return (
    <div className="text-center mt-5 text-danger">
      <h4>에러 발생 </h4>
      <p>{error?.message}</p>
    </div>
  );
};