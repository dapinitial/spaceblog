import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';
import Link from 'next/link';

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-12 pt-5 pb-5">
                <h2>Manage Categories</h2>
              </div>
              <Category/>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 pt-5 pb-5">
                <h2>Manage Tags</h2>
              </div>
              <Tag/>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  )
};

export default CategoryTag;