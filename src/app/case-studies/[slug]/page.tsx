import { notFound } from "next/navigation";
import { Metadata } from "next";
import { caseStudiesList, getCaseStudyBySlug } from "@/data/caseStudiesData";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesList.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | IncSmart",
      description: "The requested case study could not be found."
    };
  }

  return {
    title: `${study.title} | IncSmart Case Studies`,
    description: study.subtitle,
    openGraph: {
      title: study.title,
      description: study.subtitle,
      images: [study.heroImage],
    }
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailClient study={study} />;
}
