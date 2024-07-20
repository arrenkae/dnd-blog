export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1 className="text-center mt-20">Post: {params.slug}</h1>;
}
