import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { ReactNode } from 'react';

// Custom components for MDX content
export const mdxComponents: MDXComponents = {
  // Headings with custom styling and IDs for TOC
  h1: ({ children, ...props }) => (
    <h1 
      className="text-3xl lg:text-4xl font-bold mb-6 mt-12 first:mt-0" 
      id={generateId(children)}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 
      className="text-2xl lg:text-3xl font-semibold mb-4 mt-10 first:mt-0" 
      id={generateId(children)}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 
      className="text-xl lg:text-2xl font-semibold mb-3 mt-8 first:mt-0" 
      id={generateId(children)}
      {...props}
    >
      {children}
    </h3>
  ),
  
  // Paragraphs
  p: ({ children, ...props }) => (
    <p className="text-body mb-4 leading-relaxed content-width" {...props}>
      {children}
    </p>
  ),
  
  // Lists
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 content-width" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 content-width" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-body" {...props}>
      {children}
    </li>
  ),
  
  // Images with Next.js Image optimization
  img: ({ src, alt, ...props }) => (
    <div className="my-8">
      <Image
        src={src || ''}
        alt={alt || ''}
        width={800}
        height={400}
        className="rounded-xl w-full h-auto"
        {...props}
      />
      {alt && (
        <p className="text-sm text-center mt-2" style={{ color: 'var(--color-ink-subtle)' }}>
          {alt}
        </p>
      )}
    </div>
  ),
  
  // Blockquotes
  blockquote: ({ children, ...props }) => (
    <blockquote 
      className="border-l-4 pl-6 py-4 my-6 italic"
      style={{ borderColor: 'var(--color-accent-a-base)', backgroundColor: 'var(--color-accent-a-subtle)' }}
      {...props}
    >
      {children}
    </blockquote>
  ),
  
  // Code blocks
  pre: ({ children, ...props }) => (
    <pre 
      className="p-4 rounded-lg overflow-x-auto mb-4 text-sm"
      style={{ backgroundColor: 'var(--color-surface)' }}
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }) => (
    <code 
      className="px-2 py-1 rounded text-sm font-mono"
      style={{ backgroundColor: 'var(--color-surface)' }}
      {...props}
    >
      {children}
    </code>
  ),
  
  // Tables
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th 
      className="border px-4 py-2 font-semibold text-left"
      style={{ borderColor: 'var(--color-stroke)', backgroundColor: 'var(--color-surface)' }}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td 
      className="border px-4 py-2"
      style={{ borderColor: 'var(--color-stroke)' }}
      {...props}
    >
      {children}
    </td>
  ),
  
  // Horizontal rule
  hr: ({ ...props }) => (
    <hr 
      className="my-8 border-0 h-px"
      style={{ backgroundColor: 'var(--color-stroke)' }}
      {...props}
    />
  ),
  
  // Links
  a: ({ children, href, ...props }) => (
    <a 
      href={href}
      className="text-[var(--color-accent-a-base)] hover:text-[var(--color-accent-a-hover)] underline transition-colors"
      {...props}
    >
      {children}
    </a>
  ),
};

// Generate slug from heading text for TOC links
function generateId(children: ReactNode): string {
  if (typeof children === 'string') {
    return children
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  // For more complex children, try to extract text
  const extractText = (node: ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return node.toString();
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (node && typeof node === 'object' && 'props' in node) {
      const nodeWithProps = node as { props?: { children?: ReactNode } };
      if (nodeWithProps.props?.children) {
        return extractText(nodeWithProps.props.children);
      }
    }
    return '';
  };
  
  return extractText(children)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
