export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926767619136_7147287537042aa2aaa5a3ab2efa81ad.jpg?alt=media&token=5ef8e8fc-e193-409f-be81-92e0d84506ba"
          alt="Introduce Header"
          className="w-[100vw] h-[700px] object-cover"
        />
      </div>
      {children}
    </>
  );
}
