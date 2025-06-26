export default function Test() {
  const req = async () => {
    const fd = new FormData();
    fd.append("test", "hello world!");
    fetch("http://localhost/sarbaz/application_create.php", {
      method: "POST",
      body: fd,
    })
      .then((e) => e.text())
      .then((e) => console.log(e));
  };

  return (
    <>
      <button onClick={req}>Click</button>
    </>
  );
}
